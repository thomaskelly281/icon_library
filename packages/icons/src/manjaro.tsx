import { mdiManjaro } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Manjaro(props: IconComponentProps) {
  return <Icon path={mdiManjaro} {...props} />;
}

export { mdiManjaro as path };
