// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

var Arg;

var $$Array;

var ArrayLabels;

var $$Buffer;

var Bytes;

var BytesLabels;

var Callback;

var Char;

var Complex;

var Digest;

var Filename;

var Format;

var Genlex;

var Hashtbl;

var Int32;

var Int64;

var Lazy;

var Lexing;

var List;

var ListLabels;

var $$Map;

var Marshal;

var MoreLabels;

var Obj;

var Parsing;

var Pervasives$1;

var Printexc;

var Printf;

var Queue;

var Random;

var Scanf;

var $$Set;

var Stack;

var StdLabels;

var Stream;

var $$String;

var StringLabels;

var Sys;

var Uchar;

var invalid_arg = Pervasives.invalid_arg;

var failwith = Pervasives.failwith;

var Exit = Pervasives.Exit;

var abs = Pervasives.abs;

var max_int = Pervasives.max_int;

var min_int = Pervasives.min_int;

var lnot = Pervasives.lnot;

var infinity = Pervasives.infinity;

var neg_infinity = Pervasives.neg_infinity;

var max_float = Pervasives.max_float;

var min_float = Pervasives.min_float;

var epsilon_float = Pervasives.epsilon_float;

var classify_float = Pervasives.classify_float;

var char_of_int = Pervasives.char_of_int;

var string_of_bool = Pervasives.string_of_bool;

var bool_of_string = Pervasives.bool_of_string;

var bool_of_string_opt = Pervasives.bool_of_string_opt;

var int_of_string_opt = Pervasives.int_of_string_opt;

var string_of_float = Pervasives.string_of_float;

var float_of_string_opt = Pervasives.float_of_string_opt;

var $at = Pervasives.$at;

var stdin = Pervasives.stdin;

var stdout = Pervasives.stdout;

var stderr = Pervasives.stderr;

var print_char = Pervasives.print_char;

var print_string = Pervasives.print_string;

var print_bytes = Pervasives.print_bytes;

var print_int = Pervasives.print_int;

var print_float = Pervasives.print_float;

var print_newline = Pervasives.print_newline;

var prerr_char = Pervasives.prerr_char;

var prerr_string = Pervasives.prerr_string;

var prerr_bytes = Pervasives.prerr_bytes;

var prerr_int = Pervasives.prerr_int;

var prerr_float = Pervasives.prerr_float;

var prerr_newline = Pervasives.prerr_newline;

var read_line = Pervasives.read_line;

var read_int = Pervasives.read_int;

var read_int_opt = Pervasives.read_int_opt;

var read_float = Pervasives.read_float;

var read_float_opt = Pervasives.read_float_opt;

var open_out = Pervasives.open_out;

var open_out_bin = Pervasives.open_out_bin;

var open_out_gen = Pervasives.open_out_gen;

var flush = Pervasives.flush;

var flush_all = Pervasives.flush_all;

var output_char = Pervasives.output_char;

var output_string = Pervasives.output_string;

var output_bytes = Pervasives.output_bytes;

var output = Pervasives.output;

var output_substring = Pervasives.output_substring;

var output_byte = Pervasives.output_byte;

var output_binary_int = Pervasives.output_binary_int;

var output_value = Pervasives.output_value;

var seek_out = Pervasives.seek_out;

var pos_out = Pervasives.pos_out;

var out_channel_length = Pervasives.out_channel_length;

var close_out = Pervasives.close_out;

var close_out_noerr = Pervasives.close_out_noerr;

var set_binary_mode_out = Pervasives.set_binary_mode_out;

var open_in = Pervasives.open_in;

var open_in_bin = Pervasives.open_in_bin;

var open_in_gen = Pervasives.open_in_gen;

var input_char = Pervasives.input_char;

var input_line = Pervasives.input_line;

var input = Pervasives.input;

var really_input = Pervasives.really_input;

var really_input_string = Pervasives.really_input_string;

var input_byte = Pervasives.input_byte;

var input_binary_int = Pervasives.input_binary_int;

var input_value = Pervasives.input_value;

var seek_in = Pervasives.seek_in;

var pos_in = Pervasives.pos_in;

var in_channel_length = Pervasives.in_channel_length;

var close_in = Pervasives.close_in;

var close_in_noerr = Pervasives.close_in_noerr;

var set_binary_mode_in = Pervasives.set_binary_mode_in;

var LargeFile = Pervasives.LargeFile;

var string_of_format = Pervasives.string_of_format;

var exit = Pervasives.exit;

var at_exit = Pervasives.at_exit;

var valid_float_lexem = Pervasives.valid_float_lexem;

var unsafe_really_input = Pervasives.unsafe_really_input;

var do_at_exit = Pervasives.do_at_exit;

exports.Arg = Arg;
exports.$$Array = $$Array;
exports.ArrayLabels = ArrayLabels;
exports.$$Buffer = $$Buffer;
exports.Bytes = Bytes;
exports.BytesLabels = BytesLabels;
exports.Callback = Callback;
exports.Char = Char;
exports.Complex = Complex;
exports.Digest = Digest;
exports.Filename = Filename;
exports.Format = Format;
exports.Genlex = Genlex;
exports.Hashtbl = Hashtbl;
exports.Int32 = Int32;
exports.Int64 = Int64;
exports.Lazy = Lazy;
exports.Lexing = Lexing;
exports.List = List;
exports.ListLabels = ListLabels;
exports.$$Map = $$Map;
exports.Marshal = Marshal;
exports.MoreLabels = MoreLabels;
exports.Obj = Obj;
exports.Parsing = Parsing;
exports.Pervasives = Pervasives$1;
exports.Printexc = Printexc;
exports.Printf = Printf;
exports.Queue = Queue;
exports.Random = Random;
exports.Scanf = Scanf;
exports.$$Set = $$Set;
exports.Stack = Stack;
exports.StdLabels = StdLabels;
exports.Stream = Stream;
exports.$$String = $$String;
exports.StringLabels = StringLabels;
exports.Sys = Sys;
exports.Uchar = Uchar;
exports.invalid_arg = invalid_arg;
exports.failwith = failwith;
exports.Exit = Exit;
exports.abs = abs;
exports.max_int = max_int;
exports.min_int = min_int;
exports.lnot = lnot;
exports.infinity = infinity;
exports.neg_infinity = neg_infinity;
exports.max_float = max_float;
exports.min_float = min_float;
exports.epsilon_float = epsilon_float;
exports.classify_float = classify_float;
exports.char_of_int = char_of_int;
exports.string_of_bool = string_of_bool;
exports.bool_of_string = bool_of_string;
exports.bool_of_string_opt = bool_of_string_opt;
exports.int_of_string_opt = int_of_string_opt;
exports.string_of_float = string_of_float;
exports.float_of_string_opt = float_of_string_opt;
exports.$at = $at;
exports.stdin = stdin;
exports.stdout = stdout;
exports.stderr = stderr;
exports.print_char = print_char;
exports.print_string = print_string;
exports.print_bytes = print_bytes;
exports.print_int = print_int;
exports.print_float = print_float;
exports.print_newline = print_newline;
exports.prerr_char = prerr_char;
exports.prerr_string = prerr_string;
exports.prerr_bytes = prerr_bytes;
exports.prerr_int = prerr_int;
exports.prerr_float = prerr_float;
exports.prerr_newline = prerr_newline;
exports.read_line = read_line;
exports.read_int = read_int;
exports.read_int_opt = read_int_opt;
exports.read_float = read_float;
exports.read_float_opt = read_float_opt;
exports.open_out = open_out;
exports.open_out_bin = open_out_bin;
exports.open_out_gen = open_out_gen;
exports.flush = flush;
exports.flush_all = flush_all;
exports.output_char = output_char;
exports.output_string = output_string;
exports.output_bytes = output_bytes;
exports.output = output;
exports.output_substring = output_substring;
exports.output_byte = output_byte;
exports.output_binary_int = output_binary_int;
exports.output_value = output_value;
exports.seek_out = seek_out;
exports.pos_out = pos_out;
exports.out_channel_length = out_channel_length;
exports.close_out = close_out;
exports.close_out_noerr = close_out_noerr;
exports.set_binary_mode_out = set_binary_mode_out;
exports.open_in = open_in;
exports.open_in_bin = open_in_bin;
exports.open_in_gen = open_in_gen;
exports.input_char = input_char;
exports.input_line = input_line;
exports.input = input;
exports.really_input = really_input;
exports.really_input_string = really_input_string;
exports.input_byte = input_byte;
exports.input_binary_int = input_binary_int;
exports.input_value = input_value;
exports.seek_in = seek_in;
exports.pos_in = pos_in;
exports.in_channel_length = in_channel_length;
exports.close_in = close_in;
exports.close_in_noerr = close_in_noerr;
exports.set_binary_mode_in = set_binary_mode_in;
exports.LargeFile = LargeFile;
exports.string_of_format = string_of_format;
exports.exit = exit;
exports.at_exit = at_exit;
exports.valid_float_lexem = valid_float_lexem;
exports.unsafe_really_input = unsafe_really_input;
exports.do_at_exit = do_at_exit;
/* No side effect */