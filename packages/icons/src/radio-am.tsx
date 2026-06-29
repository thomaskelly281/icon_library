import { mdiRadioAm } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioAm(props: IconComponentProps) {
  return <Icon path={mdiRadioAm} {...props} />;
}

export { mdiRadioAm as path };
