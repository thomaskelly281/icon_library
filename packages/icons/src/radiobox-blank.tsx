import { mdiRadioboxBlank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioboxBlank(props: IconComponentProps) {
  return <Icon path={mdiRadioboxBlank} {...props} />;
}

export { mdiRadioboxBlank as path };
