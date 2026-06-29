import { mdiFlagCheckered } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagCheckered(props: IconComponentProps) {
  return <Icon path={mdiFlagCheckered} {...props} />;
}

export { mdiFlagCheckered as path };
