import { mdiLifebuoy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lifebuoy(props: IconComponentProps) {
  return <Icon path={mdiLifebuoy} {...props} />;
}

export { mdiLifebuoy as path };
