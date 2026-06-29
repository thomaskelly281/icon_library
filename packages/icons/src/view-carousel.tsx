import { mdiViewCarousel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewCarousel(props: IconComponentProps) {
  return <Icon path={mdiViewCarousel} {...props} />;
}

export { mdiViewCarousel as path };
