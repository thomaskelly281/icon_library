import { mdiFlower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Flower(props: IconComponentProps) {
  return <Icon path={mdiFlower} {...props} />;
}

export { mdiFlower as path };
