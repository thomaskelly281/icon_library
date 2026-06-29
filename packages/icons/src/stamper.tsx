import { mdiStamper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stamper(props: IconComponentProps) {
  return <Icon path={mdiStamper} {...props} />;
}

export { mdiStamper as path };
