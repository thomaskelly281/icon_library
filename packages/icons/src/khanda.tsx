import { mdiKhanda } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Khanda(props: IconComponentProps) {
  return <Icon path={mdiKhanda} {...props} />;
}

export { mdiKhanda as path };
