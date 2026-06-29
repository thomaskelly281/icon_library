import { mdiDeskphone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Deskphone(props: IconComponentProps) {
  return <Icon path={mdiDeskphone} {...props} />;
}

export { mdiDeskphone as path };
