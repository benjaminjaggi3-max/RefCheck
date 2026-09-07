import * as bindings from "./e57_bg.js";

const wasmResponse = await fetch(new URL("./e57_bg.wasm", import.meta.url));
const wasmBytes = await wasmResponse.arrayBuffer();
const wasmModule = await WebAssembly.instantiate(wasmBytes, {
  "./e57_bg.js": {
    __wbindgen_string_new: bindings.__wbindgen_string_new,
    __wbindgen_throw: bindings.__wbindgen_throw
  }
});

bindings.__wbg_set_wasm(wasmModule.instance.exports);

export const convertE57 = bindings.convertE57;
