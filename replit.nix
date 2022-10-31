{ pkgs }: {
	deps = [
		pkgs.python39Packages.clvm-tools
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}