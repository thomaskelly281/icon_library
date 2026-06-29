import { mdiCodeBlockBraces } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeBlockBraces(props: IconComponentProps) {
  return <Icon path={mdiCodeBlockBraces} {...props} />;
}

export { mdiCodeBlockBraces as path };
