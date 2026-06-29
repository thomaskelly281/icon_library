import { mdiGuitarPickOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GuitarPickOutline(props: IconComponentProps) {
  return <Icon path={mdiGuitarPickOutline} {...props} />;
}

export { mdiGuitarPickOutline as path };
