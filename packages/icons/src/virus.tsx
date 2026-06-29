import { mdiVirus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Virus(props: IconComponentProps) {
  return <Icon path={mdiVirus} {...props} />;
}

export { mdiVirus as path };
