# Compilation and interpretation

Notes from [Programming language pragmatics](https://www.goodreads.com/book/show/89197.Programming_Language_Pragmatics).

- A compiler is something that reads the entirity of the code, understanding its meaning and outputs the contents in a different format (assembly language or another high-level language).
- An interpreter, in contrast, analyzes the contents of the code but also takes part in it's execution.
- In interpretation, the code is run on top of a virtual machine which reads the code as if it where machine code - this offers more flexibility in analyzing and debugging on the run.
- Compiled code is run as it is (in assembly or machine code) on the machine, leading to faster execution.
- Preprocessing, in contrast to compilation or interpretation, does not rely on understanding the semantics of the code.

## Common phases

1. Scanner (lexical analysis)
2. Parser (syntax analysis)
3. Semantic analysis/intermediate code generation

## Compiler steps

4. Machine-independent code improvement
5. Target code generation
6. Machine-specific code improvement => compiled code

## Interpreter steps

4. Tree-walk routines => program output
