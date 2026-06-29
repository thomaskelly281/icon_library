import { mdiDharmachakra } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dharmachakra(props: IconComponentProps) {
  return <Icon path={mdiDharmachakra} {...props} />;
}

export { mdiDharmachakra as path };
