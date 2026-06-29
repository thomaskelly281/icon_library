import { mdiStarMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarMinus(props: IconComponentProps) {
  return <Icon path={mdiStarMinus} {...props} />;
}

export { mdiStarMinus as path };
