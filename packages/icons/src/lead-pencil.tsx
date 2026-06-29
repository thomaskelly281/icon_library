import { mdiLeadPencil } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LeadPencil(props: IconComponentProps) {
  return <Icon path={mdiLeadPencil} {...props} />;
}

export { mdiLeadPencil as path };
