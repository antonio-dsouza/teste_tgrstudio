<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json($products)->getContent();
    }

    public function store(StoreProductRequest $request)
    {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }
    
    public function show(int $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found!'], 404);
        }

        return response()->json($product);
    }

    public function update(UpdateProductRequest $request, int $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found!'], 404);
        }

        $product = $product->update($request->all());

        if (!$product) {
            return response()->json(["message" => "Error on update product!"], 400);
        }

        return response()->json(["message" => "Product update success!"]);
    }

    public function destroy(int $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found!'], 404);
        }

        $deletedProduct = $product->delete();

        if (!$deletedProduct) {
            return response()->json(["message" => "Error on delete product!"], 400);
        }

        return response()->json(["message" => "Product deleted success!"]);
    }

    public function findByName(string $name)
    {
        $products = Product::where('name', 'like', '%' . $name . '%')->get();

        return response()->json($products);
    }
}
