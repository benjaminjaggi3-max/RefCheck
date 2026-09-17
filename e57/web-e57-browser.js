import * as wasmBindings from "./e57_bg.js";

const wasmResponse = await fetch(new URL("./e57_bg.wasm", import.meta.url));
const { instance } = await WebAssembly.instantiateStreaming(
	wasmResponse,
	{
		"./e57_bg.js": {
			__wbindgen_string_new: wasmBindings.__wbindgen_string_new,
			__wbindgen_throw: wasmBindings.__wbindgen_throw
		}
	}
);

wasmBindings.__wbg_set_wasm(instance.exports);

export * from "./e57_bg.js";
