import { mdiSeedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeedOutline(props: IconComponentProps) {
  return <Icon path={mdiSeedOutline} {...props} />;
}

export { mdiSeedOutline as path };
