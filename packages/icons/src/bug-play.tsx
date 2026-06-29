import { mdiBugPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugPlay(props: IconComponentProps) {
  return <Icon path={mdiBugPlay} {...props} />;
}

export { mdiBugPlay as path };
