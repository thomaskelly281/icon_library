import { mdiStarCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarCog(props: IconComponentProps) {
  return <Icon path={mdiStarCog} {...props} />;
}

export { mdiStarCog as path };
