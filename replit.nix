{ pkgs }: {
  deps = [
    pkgs.sqliteInteractive.bin
    pkgs.sqliteInteractive.bin
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}