import { mdiRadioboxMarked } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioboxMarked(props: IconComponentProps) {
  return <Icon path={mdiRadioboxMarked} {...props} />;
}

export { mdiRadioboxMarked as path };
