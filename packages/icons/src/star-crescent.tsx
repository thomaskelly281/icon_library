import { mdiStarCrescent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarCrescent(props: IconComponentProps) {
  return <Icon path={mdiStarCrescent} {...props} />;
}

export { mdiStarCrescent as path };
