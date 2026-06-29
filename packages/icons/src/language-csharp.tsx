import { mdiLanguageCsharp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageCsharp(props: IconComponentProps) {
  return <Icon path={mdiLanguageCsharp} {...props} />;
}

export { mdiLanguageCsharp as path };
