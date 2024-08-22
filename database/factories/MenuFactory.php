<?php

namespace Database\Factories;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Menu>
 */
class MenuFactory extends Factory
{
    protected $model = Menu::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $hasParent = $this->faker->boolean(50); // 50% chance of having a parent

        return [
            'name' => $this->faker->word,
            'depth' => $this->faker->numberBetween(0, 3),
            'parent_id' => $hasParent ? $this->faker->randomElement(Menu::pluck('id')->toArray()) : null,
        ];
    }
}
