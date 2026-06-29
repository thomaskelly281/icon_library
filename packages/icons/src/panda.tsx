import { mdiPanda } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Panda(props: IconComponentProps) {
  return <Icon path={mdiPanda} {...props} />;
}

export { mdiPanda as path };
