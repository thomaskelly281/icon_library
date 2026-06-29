import { mdiRadio } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Radio(props: IconComponentProps) {
  return <Icon path={mdiRadio} {...props} />;
}

export { mdiRadio as path };
