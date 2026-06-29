import { mdiWhatsapp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Whatsapp(props: IconComponentProps) {
  return <Icon path={mdiWhatsapp} {...props} />;
}

export { mdiWhatsapp as path };
