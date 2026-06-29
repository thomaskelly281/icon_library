import { mdiLanguageHaskell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageHaskell(props: IconComponentProps) {
  return <Icon path={mdiLanguageHaskell} {...props} />;
}

export { mdiLanguageHaskell as path };
