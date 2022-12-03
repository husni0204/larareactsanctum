<?php

namespace Database\Seeders\Slider;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'judul' => 'Judul Pertama',
                'keterangan' => 'Isi keterangan pertama',
                'image' => 'Isi dari image1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'judul' => 'Judul Kedua',
                'keterangan' => 'Isi keterangan kedua',
                'image' => 'Isi dari image1',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ])->each(function ($post) {
            DB::table('sliders')->insert($post);
        });
    }
}
