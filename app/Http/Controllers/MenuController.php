<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Menu;
use Illuminate\Http\Request;
use App\Http\Resources\MenuResource;
use App\Http\Requests\CreateMenuRequest;

class MenuController extends Controller
{
    public function index() 
    {
        try{
            $menus = Menu::with('children')
            ->whereNull('parent_id')
            ->paginate(50);

            return MenuResource::collection($menus); 

        }catch(Exception $e){
            return $this->resourceError($e);
        }
    }
    
    public function store(CreateMenuRequest $request) {
       try{

          $data = $request->validated();

            $menu = Menu::create($data);

            return new MenuResource($menu); 
       }catch(Exception $e){
        return $this->resourceError($e);
    }
    }

    public function show($id) 
    {
        try{
            $menu = Menu::with('children')->find($id);

            return new MenuResource($menu); 

        }catch(Exception $e){
        return $this->resourceError($e);
            
        }
    }
    
    public function update(UpdateMenuRequest $request, $id) 
    {

        try{

            $data = $request->validated();


            $menu = Menu::find($id);

            $menu->update($data);
            
            return new MenuResource($menu); 
        }catch(Exception $e){
        return $this->resourceError($e);
            
        }
      
    }
    
    public function destroy($id) 
    {
        try{
            Menu::destroy($id);

            return response()->json(null, 204);
        }catch(Exception $e){
            return $this->resourceError($e);
                
        }
    }
}
