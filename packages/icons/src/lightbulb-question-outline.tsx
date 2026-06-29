import { mdiLightbulbQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiLightbulbQuestionOutline} {...props} />;
}

export { mdiLightbulbQuestionOutline as path };
