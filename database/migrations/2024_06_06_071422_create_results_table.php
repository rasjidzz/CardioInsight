<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->index();
            $table->integer('cholesterol_level');
            $table->integer('glucose_level');
            $table->integer('systole');
            $table->integer('diastole');
            $table->integer('weight');
            $table->integer('height');
            $table->boolean('is_smoking');
            $table->boolean('is_exercising');
            $table->double('prediction');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};
