import { mdiCodeBracesBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeBracesBox(props: IconComponentProps) {
  return <Icon path={mdiCodeBracesBox} {...props} />;
}

export { mdiCodeBracesBox as path };
