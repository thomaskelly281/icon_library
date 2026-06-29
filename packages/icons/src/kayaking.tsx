import { mdiKayaking } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kayaking(props: IconComponentProps) {
  return <Icon path={mdiKayaking} {...props} />;
}

export { mdiKayaking as path };
