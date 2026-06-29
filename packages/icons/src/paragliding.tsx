import { mdiParagliding } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Paragliding(props: IconComponentProps) {
  return <Icon path={mdiParagliding} {...props} />;
}

export { mdiParagliding as path };
