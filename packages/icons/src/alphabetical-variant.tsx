import { mdiAlphabeticalVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphabeticalVariant(props: IconComponentProps) {
  return <Icon path={mdiAlphabeticalVariant} {...props} />;
}

export { mdiAlphabeticalVariant as path };
