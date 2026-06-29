import { mdiRadioFm } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioFm(props: IconComponentProps) {
  return <Icon path={mdiRadioFm} {...props} />;
}

export { mdiRadioFm as path };
