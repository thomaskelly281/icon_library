import { mdiHomePercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomePercent(props: IconComponentProps) {
  return <Icon path={mdiHomePercent} {...props} />;
}

export { mdiHomePercent as path };
