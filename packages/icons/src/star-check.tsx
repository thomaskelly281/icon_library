import { mdiStarCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarCheck(props: IconComponentProps) {
  return <Icon path={mdiStarCheck} {...props} />;
}

export { mdiStarCheck as path };
