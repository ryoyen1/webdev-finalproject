<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Category::all();
        return $result;
    }

    public function viewid($id)
    {
        $result = Category::find($id);
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->category_name;
        $category->price = $request->category_price;
        $category->quantity = $request->category_quantity;
        $category->description = $request->category_description;
        // $category->images = $request->category_image;

        if ($request->filled('category_image')){
            
            
            
            $split_image = explode("C:\\fakepath\\", $request->category_image);

            // echo $split_image[1];

            $category->images = $split_image[1];

            // echo 'FUCK';
            // $file = $request->file('images');
            // echo 'FUCKU';
            // $extension = $file->getClientOriginalExtension();
            // echo 'FUCKME';
            // $filename = time() . '.' . $extension;
            // echo 'FUCKTHIS';
            // $file->move('uploads/highlights/', $filename);
            // echo 'FUCKHIM';
            // $highlights->images = $filename;
            // echo 'FUCKHER';
            // $category->images = $request->category_image;
            // echo 'FUCKEVERYONE';
        } 
        else {
            $category->images = '';
        }

        $category->save();

        // return $request;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
    }
}
