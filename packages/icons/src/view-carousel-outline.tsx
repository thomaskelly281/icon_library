import { mdiViewCarouselOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewCarouselOutline(props: IconComponentProps) {
  return <Icon path={mdiViewCarouselOutline} {...props} />;
}

export { mdiViewCarouselOutline as path };
