import { mdiHexagonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HexagonOutline(props: IconComponentProps) {
  return <Icon path={mdiHexagonOutline} {...props} />;
}

export { mdiHexagonOutline as path };
