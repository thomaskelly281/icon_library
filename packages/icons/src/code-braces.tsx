import { mdiCodeBraces } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeBraces(props: IconComponentProps) {
  return <Icon path={mdiCodeBraces} {...props} />;
}

export { mdiCodeBraces as path };
