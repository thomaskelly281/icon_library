import { mdiMushroomOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MushroomOutline(props: IconComponentProps) {
  return <Icon path={mdiMushroomOutline} {...props} />;
}

export { mdiMushroomOutline as path };
