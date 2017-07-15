@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")
@file:[JsQualifier("Chalk") JsModule("Chalk")]
package Chalk

import kotlin.js.*
import kotlin.js.Json
import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.parsing.*
import org.w3c.dom.svg.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import org.w3c.files.*
import org.w3c.notifications.*
import org.w3c.performance.*
import org.w3c.workers.*
import org.w3c.xhr.*

external var enabled: Boolean = definedExternally
external var supportsColor: Boolean = definedExternally
external var styles: ChalkStyleMap = definedExternally
external fun stripColor(value: String): Any = definedExternally
external fun hasColor(str: String): Boolean = definedExternally
external interface ChalkChain : ChalkStyle {
    @nativeInvoke
    operator fun invoke(): Boolean
    @nativeInvoke
    operator fun invoke(vararg text: String): String
}
external interface ChalkStyleElement {
    var open: String
    var close: String
}
external var reset: ChalkChain = definedExternally
external var bold: ChalkChain = definedExternally
external var dim: ChalkChain = definedExternally
external var italic: ChalkChain = definedExternally
external var underline: ChalkChain = definedExternally
external var inverse: ChalkChain = definedExternally
external var hidden: ChalkChain = definedExternally
external var strikethrough: ChalkChain = definedExternally
external var black: ChalkChain = definedExternally
external var red: ChalkChain = definedExternally
external var green: ChalkChain = definedExternally
external var yellow: ChalkChain = definedExternally
external var blue: ChalkChain = definedExternally
external var magenta: ChalkChain = definedExternally
external var cyan: ChalkChain = definedExternally
external var white: ChalkChain = definedExternally
external var gray: ChalkChain = definedExternally
external var grey: ChalkChain = definedExternally
external var bgBlack: ChalkChain = definedExternally
external var bgRed: ChalkChain = definedExternally
external var bgGreen: ChalkChain = definedExternally
external var bgYellow: ChalkChain = definedExternally
external var bgBlue: ChalkChain = definedExternally
external var bgMagenta: ChalkChain = definedExternally
external var bgCyan: ChalkChain = definedExternally
external var bgWhite: ChalkChain = definedExternally
external interface ChalkStyle {
    var reset: ChalkChain
    var bold: ChalkChain
    var dim: ChalkChain
    var italic: ChalkChain
    var underline: ChalkChain
    var inverse: ChalkChain
    var hidden: ChalkChain
    var strikethrough: ChalkChain
    var black: ChalkChain
    var red: ChalkChain
    var green: ChalkChain
    var yellow: ChalkChain
    var blue: ChalkChain
    var magenta: ChalkChain
    var cyan: ChalkChain
    var white: ChalkChain
    var gray: ChalkChain
    var grey: ChalkChain
    var bgBlack: ChalkChain
    var bgRed: ChalkChain
    var bgGreen: ChalkChain
    var bgYellow: ChalkChain
    var bgBlue: ChalkChain
    var bgMagenta: ChalkChain
    var bgCyan: ChalkChain
    var bgWhite: ChalkChain
}
external interface ChalkStyleMap {
    var reset: ChalkStyleElement
    var bold: ChalkStyleElement
    var dim: ChalkStyleElement
    var italic: ChalkStyleElement
    var underline: ChalkStyleElement
    var inverse: ChalkStyleElement
    var hidden: ChalkStyleElement
    var strikethrough: ChalkStyleElement
    var black: ChalkStyleElement
    var red: ChalkStyleElement
    var green: ChalkStyleElement
    var yellow: ChalkStyleElement
    var blue: ChalkStyleElement
    var magenta: ChalkStyleElement
    var cyan: ChalkStyleElement
    var white: ChalkStyleElement
    var gray: ChalkStyleElement
    var bgBlack: ChalkStyleElement
    var bgRed: ChalkStyleElement
    var bgGreen: ChalkStyleElement
    var bgYellow: ChalkStyleElement
    var bgBlue: ChalkStyleElement
    var bgMagenta: ChalkStyleElement
    var bgCyan: ChalkStyleElement
    var bgWhite: ChalkStyleElement
}
external var constructor: Any = definedExternally
external interface Chalk : ChalkStyle {
    var enabled: Boolean
}
