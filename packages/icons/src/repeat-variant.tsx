import { mdiRepeatVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RepeatVariant(props: IconComponentProps) {
  return <Icon path={mdiRepeatVariant} {...props} />;
}

export { mdiRepeatVariant as path };
