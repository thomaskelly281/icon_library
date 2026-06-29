import { mdiBugPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugPause(props: IconComponentProps) {
  return <Icon path={mdiBugPause} {...props} />;
}

export { mdiBugPause as path };
