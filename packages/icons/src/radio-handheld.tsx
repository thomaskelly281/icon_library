import { mdiRadioHandheld } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioHandheld(props: IconComponentProps) {
  return <Icon path={mdiRadioHandheld} {...props} />;
}

export { mdiRadioHandheld as path };
