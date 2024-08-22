<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    /**
     * @return JsonResponse
     */
    protected function resourceDeleted(): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Menu deleted successfully'
        ]);
    }


    protected function resourceError($error): JsonResponse
    {
        return response()->json([
            'status' => 'failed',
            'message' => $error->getMessage()
        ],500);
    }
}
